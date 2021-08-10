# Avatar

Avatar provides a easy-to-use web component that works well with Lumos design.

### Attributes

- `alt` : String - sets image alt text'
- `src` : String - sets image
- `label` : String - sets label
- `decrypting` : String - shows a loading state while the src image is loading
- `title` : String - sets title
- `color` : String - sets the background color
- `type` : String - sets the type property of the html button (button, reset, submit)
- `size` : String - sets the size
- `has-notification` : String - appends a small notification marker to the avatar

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-avatar::part(avatar) {
    width: 100px;
    max-width: 600px;
    font-size: 14px;
}
```

### Slots

#### Unnamed Slots

The Unnamed `<slot>` will render any content you pass between the `<md-avatar></md-avatar>` tags.

```html
<md-avatar>
  <p>Click Me</p>
</md-avatar>
```