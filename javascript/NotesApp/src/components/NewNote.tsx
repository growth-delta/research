import { NoteData, Tag } from "../App"
import { NoteForm } from "./NoteForm"


type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote ({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
    return (
        <div>
            <div>
                <h1 className="p4">New Notes</h1>
            </div>
            <NoteForm 
                onSubmit={onSubmit} 
                onAddTag={onAddTag} 
                availableTags={availableTags} 
            />
        </div>
    )
}