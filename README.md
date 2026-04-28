# The ODIN Project

## [Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

---

### Concepts

**Represent positions as coordinates:** Each square can be written as [x, y], where both values range from 0 to 7.

**Use a queue:** Like in tree BFS, you’ll use a queue to keep track of the next positions to explore.

**Track visited positions:** Unlike trees, graphs can revisit the same position through different paths — so be sure to track visited positions to avoid loops or unnecessary repeats.

Thinking of the board as a grid-based graph instead of a tree will help you apply BFS much more effectively here.

---

### Assignment

Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Calling your function would therefore look like:

`knightMoves([0,0],[1,2]) // returns [[0,0],[1,2]]`

**Note:** Sometimes there is more than one fastest path. Examples of this are shown below. Any answer is correct as long as it follows the rules and gives the shortest possible path.

1. Think about the rules of the board and knight, and make sure to follow them.

2. From every square, multiple moves are possible. Choose a data structure that will allow you to work with them. Don’t allow any moves to go off the board.

3. Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:

```
  > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
```

---

### Resources:

BFS for a graph:
https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/

How to console.log an arr in real time, even if it changes later:
`console.log(JSON.parse(JSON.stringify(c)))`
https://stackoverflow.com/questions/11284663/console-log-shows-the-changed-value-of-a-variable-before-the-value-actually-ch
