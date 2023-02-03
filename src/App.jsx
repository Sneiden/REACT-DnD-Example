import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { AppLayout } from './layouts';
import { SortItems } from './pages';

function App() {

  return (
    <AppLayout>
      <DndProvider backend={HTML5Backend}>
        <SortItems />
      </DndProvider>
    </AppLayout>
  )
}

export default App
