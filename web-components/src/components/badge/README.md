# Badge

Badge provides a easy-to-use web component that works well with Lumos design.

### Attributes

- `color` : String - set to a predefined color value from the design system
- `bgColor` : String - set the color to any CSS compliant value
- `textColor` : String - set the color to any CSS compliant value
- `height` : String - manually set the height to any CSS compliant value
- `width` : String - manually set the width to any CSS compliant value
-  `outlined` : Boolean - toggle outline style
-  `compact` : Boolean - toggle the compact style
-  `circle` : Boolean - toggle circle style
-  `small` : Boolean - toggles small style
-  `split` : Boolean - toggle a split badge style
-  `disabled` : Boolean - toggle disabled style

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-badge::part(badge) {
    width: 100px;
    max-width: 600px;
    font-size: 14px;
}
```

### Slots

#### Unnamed Slots

The Unnamed `<slot>` will render any content you pass between the `<md-badge></md-badge>` tags.

```html
<md-badge>
  <span>Any content</span>
</md-badge>
```

#### Named Slots

There are 2 named slots that make the split badge render nicely. Use these to get a nice separation effect for icons and content on either side of the divider.

```html
<md-badge color="blue" split>
    <span slot="split-left">
      <md-badge color="blue" small circle style="margin:0 .5rem 0 .375rem">
        <md-icon name="chat-active_16"></md-icon>
      </md-badge>
      ${"04:31"}
    </span>
    <span slot="split-right">
      <md-icon name="headset_16" style="margin-right:.375rem;height:1rem"></md-icon>
      ${"00:23"}
    </span>
  </md-badge>
  ```