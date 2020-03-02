export function intersect(entries){
  const io = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
          
      }else{

      }
  });
    io.observe(entries)      
}