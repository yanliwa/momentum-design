# Coachmark

### Attributes

- `message` : String - set message text
- `actionname` : String - sets text describing the action
- `hidebutton` : Boolean - toggles visibility of 'next action' button
- `placement` : String - defines placement of the popup message
- `show` : Boolean - toggle viibility
- `color` : String - sets coachmark color

### Slots

#### Named Slots

Use named slots for setting specific content to the correct area.
`slot="coachmark-content"`
`slot="coachmark-action"`

#### Unnamed Slots

The Unnamed `<slot>` will render any content you pass between the `<md-coachmark></md-coachmark>` tags.

```html
<md-coachmark ?show="${this.isOpenThird}" placement="left" color="green" hidebutton>
  <div slot="coachmark-content">
    <span>Coachmark third test content</span>
    <md-button slot="coachmark-action" @button-click="${this.closeCoachThird}">Slot button next</md-button>
  </div>
  <md-badge color="mint">
    <md-icon name="share-c-native-adr_12" size="16"></md-icon>
    Social
    <span class="counter" style="margin: 0 1rem;">${"3"}</span>
  </md-badge>
</md-coachmark>
```
