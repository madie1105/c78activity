var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Renato Maningas", "Rayden Jace Maningas", "Elaine Maningas"];
var i = 0;
function update()
{
    i++;
    var number_of_members = 3
    if (i > number_of_members)
    {
        i = 0
    }
    var updatedimage = images[i];
    var updatedname = names[i];
    document.getElementById("family_member_image").src = updatedimage;
    document.getElementById("family_member_name").innerHTML = updatedname;
}