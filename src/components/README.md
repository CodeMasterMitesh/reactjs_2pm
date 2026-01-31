# Derived State in React

## What is Derived State?

**Derived state** refers to data that is **calculated or computed from existing state or props** rather than being stored as an independent state variable. The core principle is to avoid duplicating data and ensure a **single source of truth**, leading to cleaner, more predictable, and more maintainable components.

## Key Principles

1. **Single Source of Truth**: Store only the essential data in state
2. **Compute on Render**: Calculate derived values during render
3. **No Redundancy**: Avoid storing values that can be computed from existing state
4. **Automatic Synchronization**: Derived values automatically update when source state changes

---

## Example Analysis: Employee Management

### ✅ Correct Implementation (Derived State)

```jsx
const StateManageWithObj = () => {
    // ✅ Store only the source data in state
    const [employeeData, setEmployee] = useState([
        { id: 1, name: "John Doe", age: 30, designation: "Software Engineer" },
        { id: 2, name: "Jane Smith", age: 25, designation: "UI/UX Designer" },
        { id: 3, name: "Mike Johnson", age: 35, designation: "Project Manager" },
        { id: 4, name: "Emily Davis", age: 28, designation: "QA Engineer" },
        { id: 5, name: "David Wilson", age: 32, designation: "DevOps Engineer" }
    ]);

    // ✅ Derive total from employeeData (computed on every render)
    const total = employeeData.reduce((total, e) => {
        return total + e.age;
    }, 0);

    // ✅ Derive averageAge from total and length
    const averageAge = total / employeeData.length;

    return (
        <div>
            <h3>Total Employees: {employeeData.length}</h3>
            <h3>Average Age: {averageAge.toFixed(2)}</h3>
        </div>
    );
}
```

### Why This is Correct:

| Aspect | Implementation | Benefit |
|--------|---------------|---------|
| **Source State** | `employeeData` array | Single source of truth |
| **Total Age** | Computed with `reduce()` | No redundant state |
| **Average Age** | Calculated: `total / length` | Automatically stays in sync |
| **Employee Count** | Direct access: `length` | No separate counter needed |

---

## ❌ Incorrect Implementation (Anti-Pattern)

### What NOT to Do:

```jsx
const StateManageWithObjBad = () => {
    // ❌ Storing the source data
    const [employeeData, setEmployee] = useState([...]);
    
    // ❌ WRONG: Storing derived values in separate state
    const [totalEmployees, setTotalEmployees] = useState(5);
    const [averageAge, setAverageAge] = useState(30);
    const [totalAge, setTotalAge] = useState(150);

    // ❌ Now you need to manually sync all states
    const addEmployee = (newEmployee) => {
        setEmployee([...employeeData, newEmployee]);
        setTotalEmployees(totalEmployees + 1);  // Easy to forget!
        setTotalAge(totalAge + newEmployee.age); // Bug-prone!
        setAverageAge((totalAge + newEmployee.age) / (totalEmployees + 1));
    };

    return (
        <div>
            <h3>Total Employees: {totalEmployees}</h3>
            <h3>Average Age: {averageAge}</h3>
        </div>
    );
}
```

### Problems with This Approach:

1. **Synchronization Issues**: Easy to forget updating all related states
2. **Bug-Prone**: State values can get out of sync
3. **More Code**: Requires manual updates everywhere
4. **Hard to Maintain**: Changes require updating multiple places
5. **Performance**: Unnecessary re-renders from multiple setState calls

---

## When to Use Derived State

### ✅ Good Candidates for Derived State:

- **Filtered lists**: `const filteredItems = items.filter(item => item.active)`
- **Sorted data**: `const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name))`
- **Aggregations**: `const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)`
- **Computed properties**: `const fullName = firstName + ' ' + lastName`
- **Array length**: `const count = items.length`
- **Boolean checks**: `const hasItems = items.length > 0`
- **Transformations**: `const userNames = users.map(u => u.name)`

### ❌ When NOT to Use Derived State:

- **Expensive calculations**: Use `useMemo` hook instead
- **Async operations**: Use effects and separate state
- **User input**: Controlled form fields need their own state
- **Previous values**: Need state to track historical data

---

## Performance Considerations

### Simple Calculations (Like Our Example)

```jsx
// ✅ This is fine - runs on every render but very fast
const total = employeeData.reduce((sum, e) => sum + e.age, 0);
const average = total / employeeData.length;
```

### Expensive Calculations

```jsx
// ❌ If calculation is slow, this re-computes on every render
const expensiveResult = complexCalculation(data);

// ✅ Use useMemo to optimize
const expensiveResult = useMemo(() => {
    return complexCalculation(data);
}, [data]); // Only recalculate when data changes
```

---

## Real-World Examples

### Example 1: Shopping Cart

```jsx
const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Laptop", price: 1000, quantity: 1 },
        { id: 2, name: "Mouse", price: 20, quantity: 2 }
    ]);

    // Derived: Total items count
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Derived: Subtotal
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Derived: Tax (10%)
    const tax = subtotal * 0.10;

    // Derived: Total
    const total = subtotal + tax;

    return (
        <div>
            <p>Items: {totalItems}</p>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};
```

### Example 2: User Search & Filter

```jsx
const UserList = () => {
    const [users, setUsers] = useState([...]); // Source state
    const [searchTerm, setSearchTerm] = useState(''); // User input state
    const [showActiveOnly, setShowActiveOnly] = useState(false); // Filter state

    // Derived: Filtered and searched users
    const displayedUsers = users
        .filter(user => showActiveOnly ? user.active : true)
        .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Derived: Count
    const displayedCount = displayedUsers.length;

    return (
        <div>
            <input 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <p>Showing {displayedCount} of {users.length} users</p>
            {displayedUsers.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};
```

### Example 3: Form Validation

```jsx
const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Derived: Validation states
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordStrong = password.length >= 8;
    const doPasswordsMatch = password === confirmPassword && password !== '';
    const isFormValid = isEmailValid && isPasswordStrong && doPasswordsMatch;

    return (
        <form>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {!isEmailValid && email && <p>Invalid email</p>}
            
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {!isPasswordStrong && password && <p>Password too short</p>}
            
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {!doPasswordsMatch && confirmPassword && <p>Passwords don't match</p>}
            
            <button disabled={!isFormValid}>Register</button>
        </form>
    );
};
```

---

## Best Practices

### 1. Keep State Minimal
```jsx
// ❌ Bad: Storing redundant data
const [users, setUsers] = useState([...]);
const [userCount, setUserCount] = useState(0);

// ✅ Good: Derive count from users
const [users, setUsers] = useState([...]);
const userCount = users.length;
```

### 2. Calculate During Render
```jsx
// ✅ Simple calculations can run on every render
const total = items.reduce((sum, item) => sum + item.price, 0);
```

### 3. Use useMemo for Expensive Operations
```jsx
// ✅ Optimize expensive calculations
const sortedAndFilteredList = useMemo(() => {
    return items
        .filter(complexFilter)
        .sort(complexSort);
}, [items]);
```

### 4. Don't Sync State to State
```jsx
// ❌ Bad: Syncing derived state with useEffect
useEffect(() => {
    setTotal(items.reduce((sum, item) => sum + item.price, 0));
}, [items]);

// ✅ Good: Calculate directly
const total = items.reduce((sum, item) => sum + item.price, 0);
```

---

## Summary

### Derived State Checklist:

- ✅ Can this value be calculated from existing state/props?
- ✅ Will it always stay in sync automatically?
- ✅ Is the calculation fast enough to run on every render?
- ✅ Does it eliminate redundant state?

If you answered **YES** to all questions, use **derived state**!

### Benefits:

1. **Less State** → Simpler component
2. **No Sync Issues** → Values always match
3. **Single Source of Truth** → Easier to reason about
4. **Fewer Bugs** → Less code to maintain
5. **Better Performance** → Fewer state updates, fewer re-renders

---

## Common Mistakes to Avoid

1. ❌ **Storing computed values in state**
2. ❌ **Using useEffect to sync derived values**
3. ❌ **Duplicating data across multiple states**
4. ❌ **Not recognizing opportunities for derived state**
5. ❌ **Over-optimizing with useMemo for simple calculations**

---

## Conclusion

The `StateManageWithObj` component is an **excellent example** of derived state because:

- It stores only the essential data (`employeeData`) in state
- It computes `total` and `averageAge` from that data
- It uses `employeeData.length` directly
- All values automatically stay synchronized
- No manual state management for derived values

This pattern makes your React components more maintainable, less error-prone, and easier to understand!
