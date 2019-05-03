# Front End Documentation

Here is in order the stuff I experimented until I figured out to be able to create this:

## SVG 
d3 uses SVGs so it would be useful to learn the basics of it.

## d3 Partition Layout
The documentation is pretty good. You need to think of the bracket as a tree structure. The tree than can displayed radially with the partition layout.

You might want to review Radians. It sets the size of the partition layout between 0 and 2 PI. Then d3 calculates the width of each bracket.

This is the best explanation [I found](https://d3indepth.com/layouts/#partition-layout).

## Arcs
`d3.arc` is a cool tool that lets you draw SVG arcs.

## Text Paths
To get the text to rotate around the circle, I used text paths. You create a `<path>` element, and then give it an ID. Then the `<textPath>` element can reference that path's ID to draw text on that path. The `letter-spacing` attribute was also useful.

### Rotations
The SVG transform is pretty cool. One thing that was tripping me up was you can rotate something, translate it, and rotate it again. In this layout, the center is position (0, 0). This is because I translated the `<g>` element to be in the center. So if you rotate by 90, translating y by 100 will make push it to the left of the center.

### Geometry
The dots were actually pretty hard to make because I kept making dumb math mistakes.

This picture helps explain the problem. 
![](https://i.imgur.com/Ge2RlDn.png)

We need the distance between the two dots touched by pink lines to be the same distance touched by the two red lines. This is hardish, because the dots are positioned by rotating. So, the offset angle needs to be smaller the farther it is away from the center. Remember these angles are in Radians.

Arc length = RADIUS * ANGLE

So say the red radius is `R1`, the pink radius is `R2`. So the distance between the two dots touched by red lines is `R1 * OFFSET1`. The distance between the two pink dots is `R2 * (OFFSET1 - x)`. We set these equal to each other, and figure out what `x` is to determine how much to subtract based on the radius.

`R1 * OFFSET1 = R2 * (OFFSET1 - x)`

`R1 * OFFSET1 = R2 * OFFSET1 - R2 * x`

`x = (R1 * OFFSET1 ) / (-R2)`.

So `x` is the offset that needs to be subtracted from the inital offset to make the angles the same.

## Webpack
I wanted to avoid webpack to make the project simple but it was a lot easier to optimize images and use es6 by including it.