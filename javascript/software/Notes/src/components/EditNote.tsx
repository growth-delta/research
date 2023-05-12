import { NoteData, Tag } from "../App"
import { NoteForm } from "./NoteForm"
import { useNote } from "./NoteLayout"

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function EditNote ({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
    const note = useNote()
    return (
        <div>
            <div>
                <h1 className="p4">Edit Notes</h1>
            </div>
            <NoteForm 
                title={note.title}
                markdown={note.markdown}
                tags={note.tags}
                onSubmit={data => onSubmit(note.id, data)} 
                onAddTag={onAddTag} 
                availableTags={availableTags} 
            />
        </div>
    )
}
