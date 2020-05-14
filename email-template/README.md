## Email Template

I want to create an email template that goes like this:
`Dear {to}, you have just won a {amount} dollars. Meet me in {country} to get your money.`

- Input

```js
const data: {
  to: "Jonathan",
  amount: "thousand",
  country: "Europe"
}
```

- Output: Dear Jonathan, you have just won a thousand dollars. Meet me in Europe to get your money.

### Part II

Given an array of data objects, return the emails that are to be sent out.

- Input

```js
const dataArray: [{
  to: "Jonathan",
  amount: "thousand",
  country: "Europe"
}, {
  to: "Marcus",
  amount: "hundred",
  country: "Indonesia"
}, {
  to: "Grace",
  amount: "hundred thousand",
  country: "Denmark"
}]
```

