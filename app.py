from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML_FORM = """
<h2>Event Registration</h2>
<form method="POST">
Name: <input type="text" name="name" required><br><br>
Email: <input type="email" name="email" required><br><br>
<button type="submit">Register</button>
</form>

{% if message %}
<h3>{{ message }}</h3>
{% endif %}
"""

@app.route("/", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")

        if name and email:
            return render_template_string(HTML_FORM, message="Success")
        else:
            return render_template_string(HTML_FORM, message="Failed")

    return render_template_string(HTML_FORM)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3007)