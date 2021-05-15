const Timer = () => {
    const intervalRef = useRef();
  
    useEffect(() => {
      const id = setInterval(() => {
        // ...
      });
      intervalRef.current = id;
      return () => {
        clearInterval(intervalRef.current);
      };
    });
  
    // ...
  }

  export default Timer;
