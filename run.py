import os
from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/book-table")
def book_table():
    return render_template("book-table.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/menu")
def menu():
    return render_template("menu.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True)