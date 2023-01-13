# Layout & Position Components

This package contains two React components - `Layout` and `Position` - that can be used to layout a page in a specific way.



## Usage

The `Layout` component should be used as a wrapper for all other content on the page. Inside the `Layout` component, you should use the `Position` component to specify where on the page each piece of content should be displayed.

The `Position` component takes one required prop: `position`. This prop should be set to one of the following values: `left`, `right`, `top`, `bottom`, or `main`.

Here's an example of how you might use these components to create a basic layout for a page:

```javascript
import React from 'react';
import { Layout } from './Layout';
import { Position } from './Position';

const Page = () => {
    return (
        <Layout>
            <Position position="left">
                <div>Left 1</div>
                <div>Left 2</div>
            </Position>
            <Position position="top">
                <div>Top 1</div>
                <div>Top 2</div>
                <Layout>
                    <Position position="left">
                        <div>INSIDE TOP Left 1</div>
                        <div>INSIDE TOP Left 2</div>
                    </Position>
                </Layout>
            </Position>
            <Position position="bottom">
                <div>Bottom 1</div>
                <div>Bottom 2</div>
            </Position>
            <Position position="right">
                <div>Right 1</div>
                <div>Right 2</div>
            </Position>
            <Position>
                <div>Main 1</div>
                <div>Main 2</div>
            </Position>
        </Layout>
    );
};

export default Page;
```

This will create a layout with a left sidebar, a top header, a bottom footer, and a main content area.

## Customizing the layout
You can customize the layout by changing the classnames in the Layout component, and using CSS to style them.


## Note
It is important to keep in mind that the `position` prop is required and the default value is `main` if no prop is passed.

