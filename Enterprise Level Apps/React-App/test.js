async function doo() {
  try {
    const req = await fetch('https://dummyjson.com/recipes?limit=10');
    const res = await req.json();
    console.log(res)
  } catch (e) {
    console.log('Error:', e)
  }
}

doo()