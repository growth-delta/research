'''Config for ./main.py | for script classes and functions'''

# Import; packages, functions, classes.
from openpyxl.chart import Reference, LineChart
from openpyxl.styles import Border, numbers, Side
from openpyxl.utils import get_column_letter
from openpyxl.utils.dataframe import dataframe_to_rows
from openpyxl.workbook import Workbook

import yfinance
import pandas

def collect_ohlc(stock_ticker='AAPL'):
    '''collect_ohlc() | collects Open, High, Low, Close and Volume data for a stock from Yahoo Finance'''
    # Create a ticker object
    data = yfinance.Ticker(stock_ticker).history(period='10y')
    return data

def apply_math(data):
    '''apply_math() | applies mathmatical formula to the close column for the % Returns'''
    # Convert the historical data to a pandas dataFrame
    data = pandas.DataFrame(data)
    # Convert the index to a column named 'Date'
    data = data.reset_index().rename(columns={'index': 'Date'})
    # Convert the 'Date' column to date format
    data['Date'] = pandas.to_datetime(data['Date'])
    # Extract just the date from the datetime column
    data['Date'] = data['Date'].dt.date
    # Read in the second CSV file
    data['1m % Returns'] = data['Close'].pct_change(20)
    data['1m Δ Volume'] = data['Volume'].diff(20)
    data = data.sort_values(by='Date', ascending=True).reset_index(drop=True)
    print(data.head())
    return data

def apply_stats(ws, col='B'):
    '''apply_stats() | applies statistical formula to the top two twos for a specified col'''
    # Use a formula to create Average an Standard Deviation Rows
    ws[f'{col}1'] = f'=AVERAGE({col}4:{col}10000)'
    ws[f'{col}2'] = f'=STDEV({col}4:{col}10000)'

def apply_style(ws, row=1, line_style='dashed', color='000000'):
    '''Style Apply Border to bottom of headers'''
    # Define a border Side
    ws_underline = Side(style=line_style, color=color)
    # Select cells
    cells = ws.iter_rows(min_row=row, max_row=row, min_col=1, max_col=10)
    # Add Border to the Bottom of Header Col
    for row in cells:
        for cell in row:
            cell.border = Border(bottom=ws_underline)

def chart_returns(wb, data_ws, stock_ticker):
    '''Charting in excel with OpenPyXL | Line Chart'''
    # Create new worksheet for chart
    chart_ws = wb.create_sheet(title=f'{stock_ticker} Chart')
    # Define Chart type
    chart = LineChart()
    # Define Chart labels & data
    labels = Reference(data_ws, min_col=1, max_col=1, min_row=4, max_row=10000,)
    data = Reference(data_ws, min_col=9, max_col=9, min_row=3, max_row=10000)
    # Create Chart
    chart.add_data(data=data, titles_from_data=True)
    chart.set_categories(labels=labels)
    chart.title = f'{stock_ticker} monthly returns'
    # Add Chart to chart worksheet
    chart_ws.add_chart(chart, 'A1')
    # Set chart worksheet as active sheet
    wb.active = chart_ws

def openpyxl_script(stock_ticker='AAPL'):
    '''openpyxl_script() | Collects Data, applies maths to new cols and rows and saves to spreadsheet'''
    # Create a workbook object (Create new spreadsheet)
    wb = Workbook()
    # Create an active worksheet
    ws = wb.active
    # Create worksheet title
    ws.title = f'{stock_ticker} Returns'
    # Retrieve data from API
    data  = collect_ohlc(stock_ticker)
    # Apply Maths for Returns Col
    data = apply_math(data=data)
    # write the DataFrame to the worksheet
    for r in dataframe_to_rows(data, index=False, header=True):
        ws.append(r)
    # Insert two new rows at the top of the worksheet
    ws.insert_rows(1, 2)
    ws['A1'] = 'Average'
    ws['A2'] = 'Standard Deviation'
    # Apply Statistics to row 1 & 2 for all col
    apply_stats(ws, col='B')
    apply_stats(ws, col='C')
    apply_stats(ws, col='D')
    apply_stats(ws, col='E')
    apply_stats(ws, col='F')
    apply_stats(ws, col='G')
    apply_stats(ws, col='H')
    apply_stats(ws, col='I')
    apply_stats(ws, col='J')
    # Apply Styles to excel ws
    apply_style(ws, row=1)
    apply_style(ws, row=2)
    apply_style(ws, row=3, line_style='thick')
    # Assume ws is your worksheet object
    col = 1  # Change to the column number you want to format
    date_format = 'yyyy-mm-dd'  # Change to the date format code you want to use
    col_letter = get_column_letter(col)
    for cell in ws[col_letter]:
        cell.number_format = numbers.FORMAT_DATE_YYYYMMDD2  # Use the appropriate format code here
    # Chart the returns col in a new ws
    chart_returns(wb, ws, stock_ticker)
    # Save the excel workbook/spreadsheet
    wb.save(f'./database/{stock_ticker}.xlsx')
    print('Save and add data and formulas to a new excel spreadsheet (Workbook) file')
