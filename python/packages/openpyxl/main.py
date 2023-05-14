'''
    This python script: Collects Data from an API 
    and puts that data into a new excel spreadsheet. 
    The data is processed and some calculations are performed. 
    The spreadsheet is save.
'''
from config import openpyxl_script

openpyxl_script(stock_ticker='WMT')

print('script has complted')
