import { useState, useRef } from 'react'

function App() {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState(() => {
		const listTodos = JSON.parse(localStorage.getItem('todos'))
		return listTodos ?? []
	})
	const inputEl = useRef(null);
	const addTodo = () => {
		setTodos(prev => {
			const nTodos = [...prev, todo]
			localStorage.setItem('todos', JSON.stringify(nTodos))
			return nTodos
		})
		setTodo('')
		inputEl.current.focus()
	}
	return (
		<div className="App" style={{ padding: '20px' }}>
			<input ref={inputEl} value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button onClick={addTodo}>Add</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App
