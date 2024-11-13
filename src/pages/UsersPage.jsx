import { useState, useEffect } from 'react';
import { userApi } from '../api';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    (async () => {
      try {
        const params = {
          page,
          limit,
          sort: sortOrder,
        };
        const response = await userApi.findAll(params);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    })();
  }, [page, sortOrder]);

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div id='team-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='external-container py-10 bg-gray-200'>
        <h2 className='mb-4 text-center font-accent text-lg text-purple-700'>
          Benutzer
        </h2>

        <div className='overflow-x-auto'>
          <table className='min-w-full text-xs bg-white'>
            <thead>
              <tr className='bg-purple-600 text-white text-sm'>
                <th className='table-cell cursor-pointer' onClick={handleSort}>
                  Email {sortOrder === 'asc' ? '↑' : '↓'}
                </th>
                <th className='table-cell'>Rolle</th>
                <th className='table-cell'>ID</th>
                <th className='table-cell'>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className='table-cell'>{user.email}</td>
                  <td className='table-cell'>{user.role}</td>
                  <td className='table-cell'>{user.id}</td>
                  <td className='table-cell'>
                    <button className='btn-primary-small text-xs md:text-base md:px-2 px-1 py-0 mr-2'>
                      Bearbeiten
                    </button>
                    <button className='btn-error-small text-xs md:text-base md:px-2 px-1 py-0'>
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex justify-between items-center mt-4'>
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className='btn-secondary-small'
          >
            Vorherige
          </button>
          <span>Seite {page}</span>
          <button onClick={handleNextPage} className='btn-secondary-small'>
            Nächste
          </button>
        </div>
      </div>
    </div>
  );
};
