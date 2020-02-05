function isIncludeElement(array, element) {
    return !array.includes(element)
}

function ramMemoryNeeded(requiredSpace, totalSpace) {
    return Math.ceil((requiredSpace / totalSpace) * 1.5);
}

function cpuNeeded(requiredSpace, cpuGhz) {
    return Math.ceil(((requiredSpace / cpuGhz) / 500) * 1.5);
}

function requiredSpace(array, name) {
    return +array.map(x => {
        if(x.name === name) {
            return x.requiredSpace 
        }
    }).filter(x => x !== undefined);
}

class Computer {
    taskManager = [];
    installedPrograms = [];
    nameWithInstalledPrograms = [];

    constructor(ramMemory, cpuGHz, hddMemory) { //// every parameters are numbers
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
    }
    installProgram(name, requiredSpace) {     ////reduce the hddMemory and push the new program
        let obj = {};                         //// in array installedPrograms
        this.hddMemory -= requiredSpace;      //// decrease hddMemory with memory of installed program
        if(this.hddMemory < 0) {
            throw new Error('There is not enough space on the hard drive');
        }
        obj = {
            name: name,
            requiredSpace: requiredSpace
        }
        this.nameWithInstalledPrograms.push(name);
        this.installedPrograms.push(obj);
    }
    uninstallProgram(name) {
        if(isIncludeElement(this.nameWithInstalledPrograms, name)) { //// Check that this program is installed
            throw new Error('Control panel is not responding')
        }

        this.installedPrograms.map(x => {
            if(x.name === name) {
                this.hddMemory += x.requiredSpace;  //// increase hhdMemory with memory of uninstalled program
                this.installedPrograms = this.installedPrograms.filter(obj => obj !== x) //// remove uninstalled program from array with programs
                this.nameWithInstalledPrograms = this.nameWithInstalledPrograms.filter(obj => obj !== x.name)
            }
        });
    }
    openProgram(name) {
        if(isIncludeElement(this.nameWithInstalledPrograms, name)) { //// Check that this program is installed
            throw new Error(`The ${name} is not recognized`);
        }

        let requireSpace = requiredSpace(this.installedPrograms, name);
         let obj = {
            name: name,
            ramUsage: ramMemoryNeeded(requireSpace, this.ramMemory),
            cpuUsage: cpuNeeded(requireSpace, this.cpuGHz)
        }
        this.taskManager.push(obj);
        return obj;
    }
    taskManagerView() {
        if(this.taskManager.length <= 0) {
            return 'All running smooth so far';
        }
        return this.taskManager.map(x => {
           return `Name - ${x.name} | Usage - CPU: ${x.cpuUsage}%, RAM: ${x.ramUsage}%`;
        }).join('\n')
    }
}

let computer = new Computer(4096, 7.5, 250000);
computer.installProgram('Word', 7300);
computer.installProgram('Excel', 10240);
computer.installProgram('PowerPoint', 12288);
computer.uninstallProgram('Word');
computer.installProgram('Solitare', 1500);
computer.openProgram('Solitare');
computer.openProgram('Excel');
console.log(computer.taskManagerView());
