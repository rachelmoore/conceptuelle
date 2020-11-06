import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle, map, cloneDeep } from "lodash";
import { connect, styled, Global, css } from "frontity";
import classnames from "classnames";
import Cell from "./cell/Cell";
import automataStyles from './automata.css';

let initialConfig = {
  generation: 0,
  height: 20,
  width: 67,
  speed: 1000
}

function createArray(initialConfig) { // Create the 2D array
  var arr = [];
  for (var i = 0; i < initialConfig.height; i++) {
    arr[i] = [];
  }
    return arr;
  }

  let initialGrid = createArray(initialConfig);

  function fillRandom(grid, config) { // Randomly fill the grid
    for (var row = 0; row < config.height; row++) { // Iterate through the rows
      for (var item = 0; item < config.width; item++) { // Iterate through the cells
        var randomNumber = Math.random(); // Generate random number 
        var randomInt = (randomNumber * 2); // Convert number to int
        var randomBinary = Math.floor(randomInt); // Change number to either 0 or 1
        if (randomBinary === 1) {
          grid[row][item] = 1; 
        } else {
          grid[row][item] = 0;
          }
        }
      }
    }

fillRandom(initialGrid, initialConfig); // Fill initial 2D array with random black and white values



const Automata = ({ state }) => {

  let [currentGrid, updateGrid] = useState(initialGrid);
  let [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(true);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setNextGrid()
      }, 1000);
    } else if (!isActive && isActive !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, currentGrid]);
  
  function isLive(rowIndex, colIndex, grid) {
    let cell = grid[rowIndex][colIndex];
    if (cell === 0) {
      return false;
    }
    return true;
  }

  function countNeighbors(x, y, grid) {
      let n = (y != initialConfig.width - 1); // Has Northern neighbors
      let e = (x != 0); // Has Eastern neighbors
      let s = (y != 0); // Has Southern neighbors
      let w = (x != initialConfig.height - 1); // Has Western neighbors
      let count = 0;
      if (n && isLive(x, y + 1, grid)) count++;
      if (n && e && isLive(x - 1, y + 1, grid)) count++;
      if (e && isLive(x - 1, y, grid)) count++;
      if (s && e && isLive(x - 1, y - 1, grid)) count++;
      if (s && isLive(x, y - 1, grid)) count++;
      if (s && w && isLive(x + 1, y - 1, grid)) count++;
      if (w && isLive(x + 1, y, grid)) count++;
      if (n && w && isLive(x + 1, y + 1, grid)) count++;
      return count;
    }

  function isUnderPopulated(c) { // Living cells with fewer than 2 living neighbors die 
    return (c < 2);
  }

  function isHealthy(c) { // Living cells with 2 or 3 living neighbord continue to live
    return (c == 2 || c == 3);
  }

  function isOverPopulated(c) { // Living cells with more than 3 living neighbors die
    return (c > 3);
  }

  function isBorn(c) { // Dead cells with 3 living neighbors become a living cell, simulating reproduction
    return (c == 3);
  }

  function liveOrDie(x, y, grid) {
    let c = countNeighbors(x, y, grid);
    let underPopulated;
    let healthy;
    let overPopulated;
    let born;
    if (isLive(x, y, grid)) {
      underPopulated = isUnderPopulated(c);
      healthy = isHealthy(c);
      overPopulated = isOverPopulated(c);
    } else {
      born = isBorn(c);
    }
    if (underPopulated || overPopulated) {
      return false;
    }
    if (healthy || born) {
      return true;
    }
  }

  function createNextGrid(gridClone) {
    let newGrid = cloneDeep(gridClone);
    
    gridClone.map((rowVal, rowIdx) => {
      rowVal.map((colVal, colIdx)=> {
        if (liveOrDie(rowIdx, colIdx, gridClone) === true) {
          newGrid[rowIdx][colIdx] = 1
        }
        if (liveOrDie(rowIdx, colIdx, gridClone) === false) {
          newGrid[rowIdx][colIdx] = 0
        }
      });
    })
    console.log('new grid', newGrid)
    return newGrid;
  }

  function setNextGrid() {
    let gridClone = cloneDeep(currentGrid);
    let updatedGrid = createNextGrid(gridClone);
    updateGrid(currentGrid = updatedGrid);
  }

  const colorChange = (event) => {
    console.log('beep')
  };
  

  return (
    <Container>
      <Global styles={css(automataStyles)} />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px 12px",
        gridGap: "3px"
      }}
    >
      {initialGrid.map((row, rowIdx) => {
        return row.map((cell, colIdx) => {

            return (
              <Cell live={currentGrid[rowIdx][colIdx]}/>
            )
        });
      })}
      <button onClick={setNextGrid}></button>
    </div>
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Automata);

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 30px;
  cursor: url("https://i.imgur.com/jAubvc0.png"), auto;
`;

const WhiteBox = styled.div`
width: 10px;
    height: 10px;
    border-radius: 20;
    background-color: #fff;
`;

const BlackBox = styled.div`
width: 10px;
    height: 10px;
    border-radius: 20;
    background-color: #000;
`;