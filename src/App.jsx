import React,{useState} from "react";

import ProjectsPage from "./components/ProjectsPage";
import Menu from "./components/Menu"

function App() {
  const [changePage, setChangePage] = useState("")

  return (

    
      <div className="w-full h-full" >

        {changePage == "Projects"?
          <ProjectsPage></ProjectsPage>
          :
          <Menu setChangePage={setChangePage}></Menu>
        }

       

    </div>
  );
}

export default App;
