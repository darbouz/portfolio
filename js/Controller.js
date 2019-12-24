function Controller() {
    this.active = "home";
}

Controller.prototype.showPage = function (name) {
    document.getElementById(name).classList.remove("hidden");
    document.getElementById(this.active).classList.add("hidden");
    this.active = name;
};


let controller = new Controller();
