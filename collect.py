import glob

DATA_PATH = "C:/Users/daneg/Downloads/Datasets/Messages/*/*"
DATA_TEMPLATE = """
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <div style="display: none;">
        {0}
    </div>
</body>

</html>
"""

# Build file:
output = ""

for path in glob.glob(DATA_PATH):
    file = open(path, "rb")
    content = file.read().decode("utf-8")
    file.close()

    split_left = """<ol
                                    class="mx_RoomView_MessageList"
                                    aria-live="polite"
                                    role="list"
                                >"""

    split_right = "</ol>"

    content = content.split(split_left)[1]
    content = content.split(split_right)[0]
    content.strip()

    output += content

# Write file:
file = open("./collect.html", "wb")
file.write(DATA_TEMPLATE.format(output).encode("utf-8"))
file.close()
