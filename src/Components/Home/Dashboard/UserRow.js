import React from 'react'

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user
  const handleAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          alert('Failed to make an admin')
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          alert('You successfully make an admin')
        }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={handleAdmin} className='btn btn-xs'>
            Make an admin
          </button>
        )}
      </td>
      <td>
        <button className='btn btn-xs'>remove user</button>
      </td>
    </tr>
  )
}

export default UserRow
