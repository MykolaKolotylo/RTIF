## Liskov Substitution Principle

Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
```
class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
```