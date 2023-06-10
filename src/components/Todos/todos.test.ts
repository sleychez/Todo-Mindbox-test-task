import {ITodo} from "../../interfaces";

test('correct task should be added to correct array', () => {
  const startState: ITodo[] = [
    {id: Math.random(), text: 'Did homework', completed: false},
    {id: Math.random(), text: 'Went for a walk', completed: false},
    {id: Math.random(), text: 'Watched the video', completed: false}
  ]
  const addTask = (text: string) => [...startState, {id: "" + Math.random(), text, completed: false}]
  const endState = addTask('newTask')

  expect(endState.length).toBe(4)
  expect(endState[0].text).toBe('Did homework')
  expect(endState[3].text).toBe('newTask')
});


test('remove task', () => {
  const startState: ITodo[] = [
    {id: Math.random(), text: 'Did homework', completed: true},
    {id: Math.random(), text: 'Went for a walk', completed: false},
    {id: Math.random(), text: 'Watched the video', completed: true}
  ]
  const removeTasksCompleted = () => startState.filter((t) => t.completed !== true)

  const endState = removeTasksCompleted()

  expect(endState.length).toBe(1)
  expect(endState[0].text).toBe('Went for a walk')
});

test('state of specified task should be changed', () => {
  const startState: ITodo[] = [
    {id: Math.random(), text: 'Did homework', completed: false},
    {id: Math.random(), text: 'Went for a walk', completed: false},
    {id: Math.random(), text: 'Watched the video', completed: false}
  ]

  const changeTaskState = (id: string | number, completed: boolean) => {
    return startState.map((t) =>
      t.id === id ? {...t, completed} : t
    );
  };

  const endState = changeTaskState(startState[0].id, true)

  expect(endState[0].completed).toBe(true)
  expect(endState[1].completed).toBe(false)
  expect(endState[2].completed).toBe(false)
  expect(endState.length).toBe(3)
});

