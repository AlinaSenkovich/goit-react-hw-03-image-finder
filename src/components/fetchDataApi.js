export const fetchDataApi = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=28545152-94e55978d3ea380a963d011b7&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000))) // Задержка добавлена для тестирования Loader
    .then(res => res.json())
    .then(data => data.hits);
};

export { fetchDataApi as default };
