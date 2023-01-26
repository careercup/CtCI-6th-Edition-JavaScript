function simulateGenderRatio() {
    let boys = 0;
    let girls = 0;
    for (let i = 0; i < 10000; i++) {
      let hasGirl = false;
      while (!hasGirl) {
        let baby = Math.random() < 0.5 ? "boy" : "girl";
        if (baby === "girl") {
          hasGirl = true;
          girls++;
        } else {
          boys++;
        }
      }
    }
    console.log(`boys: ${boys}, girls: ${girls}, ratio: ${boys/girls}`);
  }
  
  simulateGenderRatio();