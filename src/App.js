import './App.css';
import './components/NewCard';
import NewCard from './components/NewCard';

import PageHeader from './components/PageHeader/PageHeader';
import PageMain from './components/PageMain/PageMain';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <>
      <PageHeader />
      <PageMain />
      <PageFooter />
    </>
  );
}

export default App;
