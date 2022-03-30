function table(){
               var r, c, t;

               r = document.getElementById("row").value;
                c = document.getElementById("col").value;

               if(r >= 1 && r <= 12){
                   if(c >= 1 && c <=12){

                    if (r < 6){
                        if (c < 4){

                            t= "<table class='tble' border='1px' height='175' width='500'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;

                        } else if (c < 6 && c >=4 ){

                            t= "<table class='tble' border='1px' height='200' width='750'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;

                        } else if (c >= 6 && c < 9){

                            t= "<table class='tble' border='1px' height='250' width='1500'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;

                        } else {

                            t= "<table class='tble' border='1px' height='300' width='1500'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                for(var cl = 1; cl <= c; cl++){
                                    t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                            document.getElementById("t").innerHTML= t;
                        }
                    } else if (r >=6 && r < 10) {
                        if (c < 6){

                            t= "<table class='tble' border='1px' height='400' width='750'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                for(var cl = 1; cl <= c; cl++){
                                    t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                            document.getElementById("t").innerHTML= t;

                            } else if (c >= 6 && c < 9){

                            t= "<table class='tble' border='1px' height='500' width='900'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                for(var cl = 1; cl <= c; cl++){
                                    t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                            document.getElementById("t").innerHTML= t;

                            } else {

                            t= "<table class='tble' border='1px' height='500' width='1200'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                for(var cl = 1; cl <= c; cl++){
                                    t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                            document.getElementById("t").innerHTML= t;
                            }
                    } else {

                        if (c < 4){

                            t= "<table class='tble' border='1px' height='600' width='500'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;

                        } else if (c < 6 && c >=4){

                            t= "<table class='tble' border='1px' height='600' width='750'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;
                            
                        } else if (c >= 6 && c <= 9){

                            t= "<table class='tble' border='1px' height='600' width='750'>";
                            for(var rl = 1; rl <= r; rl++){
                                    t +="<tr>";
                                 for(var cl = 1; cl <= c; cl++){
                                     t+= "<td> </td>";
                                    }
                                t +="</tr>";
                                }
                            t+="</table>"; 
                        document.getElementById("t").innerHTML= t;
                        
                        } else if (c > 9 && c < 12) {

                            t= "<table class='tble' border='1px' height='600' width='1000'>";
                                for(var rl = 1; rl <= r; rl++){
                                        t +="<tr>";
                                    for(var cl = 1; cl <= c; cl++){
                                        t+= "<td> </td>";
                                        }
                                    t +="</tr>";
                                    }
                                t+="</table>"; 
                            document.getElementById("t").innerHTML= t;

                        } else 

                            t= "<table class='tble' border='1px' height='600' width='1500'>";
                                for(var rl = 1; rl <= r; rl++){
                                        t +="<tr>";
                                    for(var cl = 1; cl <= c; cl++){
                                        t+= "<td> </td>";
                                        }
                                    t +="</tr>";
                                    }
                                t+="</table>"; 
                            document.getElementById("t").innerHTML= t;
                    }
                 }else 
                   alert("Out of Range Input(s), Please try Again!");
               }else
               alert("Out of Range Input(s), Please Try again!");
           }