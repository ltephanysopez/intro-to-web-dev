

# What is CSS Grid?

CSS Grid is a technique in CSS that allows developers to create responsive web design layouts more easily and consistently across browsers. With CSS Grid, we can transform our elements from this layout:
![Standard HTML Layout](https://raw.githubusercontent.com/ltephanysopez/intro-to-web-dev/master/docs/images/normal-html-layout.png)
to this: 
![CSS Grid Layout](https://raw.githubusercontent.com/ltephanysopez/intro-to-web-dev/master/docs/images/css-grid-layout.png)

What separates a good website from a bad website is the ability to structure the contents of your website in the most approachable way to your users. Your website should be clean with an easy-to-follow navigation system to contribute to a usable webpage layout.

A layout that is easy to follow will give the site’s visitor easy access to the valuable and important information on your website. When content is difficult to find on a webpage, visitors get agitated and choose to leave the site with the possibility of not returning.

***


# Getting Started
Let’s begin! To create a grid, we’ll first need to create a `<div>` element with the class name grid. The `<div>` tag is used as a container that divides the HTML document into sections. We use `<div>` elements to group together HTML elements and apply CSS styles to many elements at once.

```
<div class="grid">

</div>
```


Fantastic! This `<div>` element states that on our webpage, we have a designated section named grid. Now, it’s time for us to add items inside our grid that we’ll use to style. We’ll do this by adding smaller sections with `<div>` elements and give them individual IDs.

```
<div class="grid">
   <div id="item-1"> 1 </div>
   <div id="item-2"> 2 </div>
   <div id="item-3"> 3 </div>
   <div id="item-4"> 4 </div>
</div>
```
At this point, we have one large container full of smaller containers that make up a grid. Let’s turn our container into a grid by modifying it in our CSS.

```
.grid {
    display: grid;
}
```
Now, let’s see what our grid looks like:
![No change to our elements](https://raw.githubusercontent.com/ltephanysopez/intro-to-web-dev/master/docs/images/normal-html-layout.png)


Because we haven’t defined any rows or columns in our grid yet, the elements will remain stacked on top of each other. Let’s change this by adding two new properties to our grid class: `grid-template-columns` and `grid-template-rows`.

```
.grid {
     display: grid;
     grid-template-columns: 100px 100px;
     grid-template-rows: 50px 50px;
}
```

Each value provided to the `grid-template-columns` and `grid-template-rows` properties dictate how wide we want our columns (100px) and how tall we want our rows (50px). So now, our grid will look like this: 

![Adding rows and columns to our grid in CSS](https://github.com/ltephanysopez/intro-to-web-dev/blob/master/docs/images/grid-one.png?raw=true)

Excellent! Let’s create a small gap between the elements in our grid by adding the `grid-gap` property:

```
.grid {
     display: grid;
     grid-template-columns: 100px 100px;
     grid-template-rows: 50px 50px;
     grid-gap: 10px;
}
```

By adding the `grid-gap` property, we obtain the following result:
![CSS Grid with rows, columns, and a gap between all elements](https://github.com/ltephanysopez/intro-to-web-dev/blob/master/docs/images/grid-two.png?raw=true)

***

# Position and Resizing

In addition to grid rows and columns, we also have grid lines that identify the start and end of a column. 
![Grid Lines](https://github.com/ltephanysopez/intro-to-web-dev/blob/master/docs/images/2d-grid-layout.png?raw=true)


From the figure above, we can see that although we have 3 columns, we have 4 grid lines where:
- Column 1 starts at line 1 and ends at line 2
- Column 2 starts at line 2 and ends at line 3
- Column 3 starts at line 3 and ends at line 4

***

To create multi-dimensional layouts, all we’ll need to do is modify where each element in our grid starts and ends. Let’s modify our layout so that the first item in our grid spans across all three columns.

In my HTML file, I'm going to create a `<div>` element with the class name grid that contains nine unique elements with matching ids inside:

```
<div class="grid">
     <div id=“item-1”> 1 </div>
     <div id=“item-2”> 2 </div>
     <div id=“item-3”> 3 </div>
     <div id=“item-4”> 4 </div>
     <div id=“item-5”> 5 </div>
     <div id=“item-6”> 6 </div>
     <div id=“item-7”> 7 </div>
     <div id=“item-8”> 8 </div>
     <div id=“item-9”> 9 </div>
</div>
```

Now that we've created all our elements in the HTML file, let's style our grid class by adding 3 columns that are 300px wide and 3 rows that are 300px tall. I’ve also specified that the first element in our grid should span over 3 entire columns by specifying which lines the column should start and end on with two new properties: `grid-column-start` and `grid-column-end`.
```
.grid {
   display: grid;
   grid-template-columns:300px 300px 300px;
   grid-template-rows:300px 300px 300px;
   grid-gap:15px;
}

#item-1 {
   grid-column-start:1;
   grid-column-end:4;
}
```

Let's see how the styling above affects our grid:
![Multi-dimensional CSS Grid Layout](https://github.com/ltephanysopez/intro-to-web-dev/blob/master/docs/images/multi-dimensional-layout.png?raw=true)

Since we've styled the first element in our grid to span across all 3 columns, all the other elements in the grid have been pushed over to the next available column.

Another way to specify which grid lines an element should span across is with the shorthand `grid-column` property, which takes two values: the starting grid line and the ending grid line. 
```
#item-1 {
   grid-column: 1/4;
}
```


***

And that’s the basics of CSS Grid! Using the properties we’ve gone over, you now have the availability to create multi-dimensional layouts that will best suit your website. Let's look at another example with the same number of elements as the previous example, but with different CSS styling: 

```
.grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 200px 100px 100px;
    grid-template-rows: repeat(5, 100px);
}

#item-1 {
    grid-column:1/3;
}

#item-4 {
    grid-column:2/4;
}

#item-5 {
    grid-column:1/4;
}

#item-9 {
    grid-column:1/4;
}

```

The styling above produces the following grid: 


![Multi-dimensional Layout Example with CSS Grid](https://github.com/ltephanysopez/intro-to-web-dev/blob/master/docs/images/multid-layout-example.png?raw=true)

***

Thanks for reading this tutorial! If you want to learn more about CSS Grid, check out these awesome resources:

- Grid Critters: https://www.gridcritters.com/
- W3Schools: https://www.w3schools.com/css/css_grid.asp
- CSS Tricks: https://css-tricks.com/snippets/css/complete-guide-grid/
- Grid by Example: https://gridbyexample.com/examples/
- Learn CSS Grid for free: https://scrimba.com/g/gR8PTE