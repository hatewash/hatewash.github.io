ref_list = []
with open("ref.txt", "r") as f:
    data = f.readlines()
for each_ref in data:
    ref = each_ref.strip().split(": ")
    # <li><a href="https://www.adl.org/onlineharassment">Anti-Defamation League</a></li>
    ref_gen = '<li><a href="' + ref[-1] + '">' + " ".join(
        ref[0:-1]) + '</a></li>'
    ref_list.append(ref_gen + "\n")
with open("ref_list.text", "w") as f:
    f.writelines(ref_list)