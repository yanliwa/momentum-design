# Card

### Attributes

- `title` : String - sets title text content
- `subtitle` : String - sets the subtitle text content
- `id` : String - sets a manual ID
- `info` : String - sets the message text for tooltips
- `info-aria-label` : String - provides arialabel text for buttons in the shadow dom
- `menu-aria-label` : String - provides arialabel text for menus in the shadow dom
- `menuOptions` : Array - list of items to add to the internal card menu

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-card::part(card) {
    height: 600px;
    width: 400px;
}
```

### Slots

The Card component makes heavy use of passing slotted content to render contents correctly. Use the named slots below to put your content in the right place.

#### Named Slots

"card-header-aside"
"card-header-title"
"content" - The main card content, can be any HTML
"footer" - The footer content, can be any HTML

```html
<md-card
  title="Team A Report - Q1"
  subtitle="Updated 2 hours ago"
  info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
>
  <div slot="content">
    <img
      style="width: 100%;"
      src="https://media.istockphoto.com/vectors/dashboard-ui-modern-presentation-with-data-graphs-and-hud-diagrams-vector-id1159848977"
      alt=""
    />
  </div>

  <md-badge slot="footer" color="violet" small>Active</md-badge>
</md-card>
```
