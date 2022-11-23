const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Page navigation" className="text-center">
      <ul class="pagination">
        {pageNumber.map((n) => (
          <li class="page-item">
            <a onClick={() => paginate(n)} class="page-link" href="#">
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
