const sucGetHandler = async (req, res) => {
  try {
    const { data } = await sucGetController();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "No hay sucursales" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw error.message;
  }
};

module.exports = sucGetHandler;
