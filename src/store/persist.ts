export function loadState() {
	try {
		const serializedState = localStorage.getItem('momentumState')
		if (!serializedState) return undefined
		return JSON.parse(serializedState)
	} catch (err) {
		console.error('Could not load state from localStorage:', err)
		return undefined
	}
}

export function saveState(state: any) {
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('momentumState', serializedState)
	} catch (err) {
		console.error('Could not save state to localStorage:', err)
	}
}
