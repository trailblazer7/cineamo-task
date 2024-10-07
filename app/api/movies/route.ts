const GET = async () => {
  try {
    const response = await fetch('https://api.cineamo.com/movies');
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response('Failed to fetch movies', {
      status: 500,
    });
  }
}

export { GET }