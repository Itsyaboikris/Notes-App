import {NoteForm} from './NoteForm'
import React from 'react'

export function NewNote() {
	return(
		<>
			<h1 className="mb-4">New Note</h1>
			<NoteForm />
		</>
	)
}