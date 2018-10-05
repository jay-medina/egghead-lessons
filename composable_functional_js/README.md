## Notes

#### Functor

A type with a map function

```javascript
const Box = x => ({
  map: f => Box(f(x)),
});
```

### Semigroup

A type with a concat function

```javascript
const Sum = x => ({
  x,
  concat: other => Sum(x + other.x),
});
```

### Monoid

A Semigroup with an element that acts like a neutral identity.

```javascript
const Sum = x => ({
  x,
  concat: other => Sum(x + other.x),
});

Sum.empty = () => Sum(0); // Monoid
```

### Flatmap
