 // Photo Crop
 $(document).ready(function ()
        {
            var ObjMainF = $("#divfoto");
            var ObjFoto = $("#Dfoto");

            //Call the fotoFunction
            fotoPos(ObjMainF, ObjFoto);

            // The Photofunction 
            function fotoPos(ObjMainF, ObjFoto)
            {
                var x = 0;
                var xB = 0;
                var xE = 0;
                var y = 0;
                var yB = 0;
                var yE = 0;

                // call the mouseMove
                main_pos(ObjMainF);

                // Main Div move
                function main_pos(OBJ) {
                    OBJ.on("mousedown", function (ee) {
                        xB = ee.pageX;
                        yB = ee.pageY;

                        $(this).on("mousemove", function (e) {
                            x = no_check(xB, e.pageX, xE);
                            y = no_check(yB, e.pageY, yE);

                            // Call the move foto
                            move_foto(ObjFoto);
                            show_parms(ObjFoto);
                        });

                        $(this).on("mouseup", function (e) {
                            xE = x;
                            yE = y;

                            OBJ.unbind("mousemove");
                        });
                    });
                }

                // The no check function and give x and y back
                function no_check(iB, iE, iP) {
                    var ii = 0;

                    if (iB > iE) {
                        ii = iB - iE;
                        return iP - ii;
                    }
                    else {
                        ii = iB - iE;
                        return iP - ii;
                    }
                }

                // The Move foto function
                function move_foto(OBJF)
                {
                    OBJF.css("background-position-x", x);
                    OBJF.css("background-position-y", y);
                }
            }// End Photo Function

            // Event Functions //
            // Butt Set Percentage
            var strPerc = 100;
            var iStep = 5;
            $("#buttFoto").click(function ()
            {
                var iSize = document.getElementById("inPrec").value;

                // strPerc = iSize;
                $("#txtPerc").text(strPerc + "%");

                ObjFoto.css("background-size", iSize + "%");
            });
            
            // Butt Min
            $("#buttMin").click(function()
            {
                strPerc = (strPerc - iStep);
                ObjFoto.css("background-size", strPerc + "%");

                $("#txtPerc").text(strPerc + "%");
            });

              // Butt Plus
            $("#buttPlus").click(function()
            {
                strPerc = (strPerc + iStep);
                ObjFoto.css("background-size", strPerc + "%");

                $("#txtPerc").text(strPerc + "%");
            });

            // Butt Load Photo
            $("#buttLoadF").click(function () {
                var strF = document.getElementById("inLoadF").value;
                var strT = "";

                strT = "url('";
                strT += strF;
                strT += "')";

                ObjFoto.css("background-image", strT);
            });

            // UI functions //
            // Call the params
            show_parms(ObjFoto);

            var bPX = 0;
            var bPY = 0;
            function show_parms(OBJF)
            {
                var bP = OBJF.css("backgroundPosition").split(' ');
                bPX = bP[0];
                bPY = bP[1];
                var strParms = "";

                strParms += "x-pos:" + bPX;
                strParms += " : ";
                strParms += "y-pos:" + bPY;

                $("#txtPos").text(strParms);
            }

        }); // End Doc ready
