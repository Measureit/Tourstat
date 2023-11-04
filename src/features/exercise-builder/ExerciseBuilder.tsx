import Split from 'react-split'
import { CodeEditor } from './code-editor/CodeEditor'
import { ExerciseActivity } from './exercise-activity/ExerciseActivity'
import { ExerciseVisualizer } from './exercise-visualizer/ExerciseVisualizer'
import './ExerciseBuilder.css'
export function ExerciseBuilder() {
  return (
    <Split direction="vertical" style={{ height: `calc(100vh - 4rem)` }} sizes={[75, 25]}>
      <Split className="superflex" sizes={[75, 25]}>
        <ExerciseVisualizer />
        <ExerciseActivity/>
      </Split>
      <CodeEditor />
    </Split>
  )
}
