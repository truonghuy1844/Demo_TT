import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Trang chủ</h2>
      <p>Bạn đã nhấn {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm vào đây</button>
    </div>
  );
}

export default Home;
