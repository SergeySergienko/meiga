import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api';
import { useStore } from '../store';
import { InvokeModalElement } from '../components';

export const UsersPage = () => {
  const navigate = useNavigate();

  const currentUser = useStore((state) => state.currentUser);

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

  const changeUserRole = async (id, role) => {
    const newRole = role === 'USER' ? 'ADMIN' : 'USER';
    try {
      await userApi.changeRole(id, newRole);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error('error:', error);
      if (error.status === 403) {
        navigate('/error', {
          state: {
            error: {
              title: 'Die Benutzerrolle konnte nicht geändert werden',
              message: 'Das Benutzerkonto wurde noch nicht aktiviert',
              path: '/users',
            },
          },
        });
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      await userApi.delete(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('error:', error);
      if (error.status === 403) {
        navigate('/error', {
          state: {
            error: {
              title: 'Der Benutzer konnte nicht gelöscht werden',
              message:
                'Der Benutzer mit Teammitglied Status kann nicht gelöscht werden',
              path: '/users',
            },
          },
        });
      }
    }
  };

  return (
    <div id='users-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
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
                {/* <th className='table-cell'>ID</th> */}
                <th className='table-cell'>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className='table-cell'>{user.email}</td>
                  <td className='table-cell'>{user.role}</td>
                  {/* <td className='table-cell'>{user.id}</td> */}
                  <td className='table-cell'>
                    <span className='flex gap-2'>
                      {currentUser.role === 'OWNER' &&
                        user.role !== 'OWNER' && (
                          <InvokeModalElement
                            action='ändern'
                            entity='Rolle'
                            descriptor={user.role}
                            submitFn={() => changeUserRole(user.id, user.role)}
                          >
                            {(fn) => (
                              <button
                                className='px-2 h-4 md:h-6 text-xs md:text-sm bg-purple-700 text-white rounded-xl shadow-lg hover:shadow-none hover:bg-purple-500 disabled:shadow-none disabled:bg-purple-400 transition-all'
                                onClick={fn}
                              >
                                Ändern
                              </button>
                            )}
                          </InvokeModalElement>
                        )}
                      {user.role === 'USER' && (
                        <InvokeModalElement
                          type='error'
                          action='löschen'
                          entity='Benutzer'
                          descriptor={user.email}
                          submitFn={() => deleteUser(user.id)}
                        >
                          {(fn) => (
                            <button
                              className='px-2 h-4 md:h-6 text-xs md:text-sm bg-red-500 text-white rounded-xl shadow-lg hover:shadow-none hover:bg-red-400 disabled:shadow-none disabled:bg-red-300 transition-all'
                              onClick={fn}
                            >
                              Löschen
                            </button>
                          )}
                        </InvokeModalElement>
                      )}
                    </span>
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
