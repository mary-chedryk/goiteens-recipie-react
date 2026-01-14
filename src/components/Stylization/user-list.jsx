export function User ({name, age }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
};

function UserList() {
  return (
    <div>
      {users.map(user => (
        <User
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </div>
  );
}
