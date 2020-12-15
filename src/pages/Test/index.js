import { useEffect, useState } from "react";

function Test() {
  const [state, setState] = useState({
    count: 0,
    description: "Empty"
  });
  
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      count: 1
    }));

    const fetchDescription = async () => {
      /*
      await fetch("https://azuredragon.noopsbycertik.com/shield/status", {
        method: "GET"
      })
        .then(res => res.json())
        .then(res => {
          setState(prevState => ({
            ...prevState,
            description: JSON.stringify(res)
          }));
        },
        err => {
          setState(prevState => ({
            ...prevState,
            description: "failed"
          }));
        });
      */
      const response = await fetch("https://azuredragon.noopsbycertik.com/shield/status", {
        method: "GET"
      });
      if (response.ok && response.status === 200) {
        const responseJSON = await response.json();
        setState(prevState => ({
          ...prevState,
          description: JSON.stringify(responseJSON)
        }));
      }
    };
    fetchDescription();
  }, []);

  return (
    <div>
      <div class="container">
        Test: {state.count}
      </div>
      <div class="container">
        Description: {state.description}
      </div>
    </div>
  );
}

export default Test;
