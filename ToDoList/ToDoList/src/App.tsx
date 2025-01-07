import './App.css'
import './components/sidePanel/SidePanel'
import SidePanel from './components/sidePanel/SidePanel';

const sections = [
  { category: 'DashBoard' },
  { category: 'My Task' },
  { category: 'Dairy' },
];

function App() {

  return (
    <>
      <div>
        <SidePanel sections={sections} />
      </div>
    </>
  )
}

export default App
