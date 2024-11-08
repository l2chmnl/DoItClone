import React from 'react'
function Food(props: any) {
  /* 중괄호로 감싸면 컴포넌트 명으로 사용 가능 */ 
  return <h1>I like { props.fav }</h1> 
}

function App() {
  return (
  
  <div>
    <h1>Hello</h1> 
    {/* 문자열을 제외하고 중괄호{} 안에 넣어야함 */}
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="samgiopsal"/>
    <Food fav="chukumi"/>
    </div>
  );
}

export default App;
