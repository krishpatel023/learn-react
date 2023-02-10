NOTES:
* **No effect of state & props.
* **It runs after the page is loaded.
* **After HTML is loaded it runs.So any operation that is dependent on HTML is done through this.
* Maily used when we need to call the APIs.
* *It dosen't reloads when state or props are changed thus once APIs are called it won't relod. We need that functionality as we dont want everytime there is change in state/props APIs are recalled.
* **Any opereations that we need to run

See the order of loading --> COnstructor -> RENDER -> CONSTRUCTOR_DID_MOUNT
