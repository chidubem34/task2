function limitByLength(str) {
    if (str.length <= 100) {
        return str;
    } else {
        return str.substring(0, 100) + '...';
    }
}

const input = "ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.";

const output = limitByLength(input);

console.log(output);