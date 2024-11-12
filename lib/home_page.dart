import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  HomePageState createState() => HomePageState();
}

class HomePageState extends State<HomePage> {
  List<Map<String, String>> espacios = []; // Lista para almacenar los espacios
  int step = 1; // Controlar los pasos dentro del modal
  String ubicacion = ''; // Interior o Exterior
  String subUbicacion = ''; // Sala, Dormitorio, etc.
  String tipoLuz = ''; // Soleado, Sol parcial, etc.

  // Función para avanzar al siguiente paso
  void nextStep(String selection, StateSetter setModalState) {
    setModalState(() {
      if (step == 1) {
        ubicacion = selection;
      } else if (step == 2) {
        subUbicacion = selection;
      } else if (step == 3) {
        tipoLuz = selection;

        // Aquí llamamos a setState en el nivel principal para actualizar la pantalla
        setState(() {
          // Añadir el nuevo espacio a la lista
          espacios.add({
            'ubicacion': ubicacion,
            'subUbicacion': subUbicacion,
            'tipoLuz': tipoLuz,
          });
        });

        // Cierra el modal al finalizar
        Navigator.pop(context);
      }
      step++;
    });
  }

  // Función para mostrar el modal de añadir espacio
  void showAddSpaceModal() {
    // Reiniciar los valores antes de abrir el modal
    setState(() {
      step = 1;
      ubicacion = '';
      subUbicacion = '';
      tipoLuz = '';
    });

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(
          top: Radius.circular(25),
        ),
      ),
      builder: (BuildContext context) {
        return StatefulBuilder(
          builder: (BuildContext context, StateSetter setModalState) {
            return Padding(
              padding: EdgeInsets.only(
                  bottom: MediaQuery.of(context).viewInsets.bottom),
              child: SizedBox(
                height: 400,
                child: Column(
                  children: [
                    AppBar(
                      title: Text(
                        'Añadir Nuevo Espacio',
                        style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      backgroundColor: Colors.transparent,
                      elevation: 0,
                      automaticallyImplyLeading: false,
                      actions: [
                        IconButton(
                          icon: Icon(Icons.close, color: Colors.grey),
                          onPressed: () => Navigator.pop(context),
                        ),
                      ],
                    ),
                    if (step == 1)
                      Column(
                        children: [
                          Text(
                            'Selecciona la ubicación',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () =>
                                nextStep('Interior', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.lightGreen,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Interior',
                                style: TextStyle(color: Colors.white)),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () =>
                                nextStep('Exterior', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.lightBlue,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Exterior',
                                style: TextStyle(color: Colors.white)),
                          ),
                        ],
                      )
                    else if (step == 2)
                      Column(
                        children: [
                          Text(
                            'Selecciona la sububicación',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () => nextStep('Sala', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.orange,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Sala',
                                style: TextStyle(color: Colors.white)),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () =>
                                nextStep('Dormitorio', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.orange,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Dormitorio',
                                style: TextStyle(color: Colors.white)),
                          ),
                        ],
                      )
                    else if (step == 3)
                      Column(
                        children: [
                          Text(
                            'Selecciona el tipo de luz',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () => nextStep('Soleado', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.yellow,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Soleado',
                                style: TextStyle(color: Colors.black)),
                          ),
                          SizedBox(height: 10),
                          ElevatedButton(
                            onPressed: () =>
                                nextStep('Sol parcial', setModalState),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.yellow,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(15),
                              ),
                              padding: EdgeInsets.symmetric(
                                  vertical: 10, horizontal: 20),
                            ),
                            child: Text('Sol parcial',
                                style: TextStyle(color: Colors.black)),
                          ),
                        ],
                      ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Mis Plantas"),
      ),
      body: espacios.isEmpty
          ? Center(
              child: Text(
                "Aún no has agregado ningún espacio",
                style: TextStyle(fontSize: 18, color: Colors.grey),
              ),
            )
          : ListView.builder(
              itemCount: espacios.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(espacios[index]['subUbicacion']!),
                  subtitle: Text(
                      "${espacios[index]['ubicacion']} - ${espacios[index]['tipoLuz']}"),
                );
              },
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: showAddSpaceModal,
        child: Icon(Icons.add),
      ),
    );
  }
}
