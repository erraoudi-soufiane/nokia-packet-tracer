import { Image, HStack, Tooltip, Box } from "@chakra-ui/react";
import { Category } from "./Subcategories";
import NetworkDevices from "../assets/cloud.png";
import firewall from "../assets/ios-firewall.png";
import router from "../assets/network devices/router.png";
import workgroupSwitch from "../assets/workgroup-switch.png";
import wirelessTransport from "../assets/network devices/wireless-transport.png";
import IE2000 from "../assets/network devices/IE2000.png";
import MultilayerSwitch from "../assets/network devices/MultilayerSwitch.png";
import switchImg from "../assets/network devices/switch.png";
import bridge from "../assets/network devices/bridge.png";
import coaxialSplitter from "../assets/network devices/coaxialSplitter.png";
import hub from "../assets/network devices/hub.png";
import repeater from "../assets/network devices/repeater.png";
import accesspoint from "../assets/network devices/accesspoint.png";
import MerakiMX65W from "../assets/network devices/Meraki-MX65W.png";
import fileserver from "../assets/network devices/fileserver.png";
import homeGateway from "../assets/network devices/homeGateway.png";
import radioTower from "../assets/network devices/radio-tower.png";
import wirelessRouter from "../assets/network devices/wireless-router.png";
import firewall1 from "../assets/network devices/firewall.png";
import WANEmulation from "../assets/network devices/WAN Emulation.png";
import modem from "../assets/network devices/modem.png";
import wirelessRouter1 from "../assets/network devices/wireless-router1.png";
import fileServer from "../assets/End Devices/file-server.png";
import airCooler from "../assets/components/air cooler.png";
import connections from "../assets/connections/connections.png";
import Alarm from "../assets/components/Alarm.png";
import pcRoutercard from "../assets/multiuser connector/pc-removebg-preview.png";
import folder from "../assets/miscellaneous/folder-removebg-preview.png";
import laptop from "../assets/End Devices/laptop.png";

interface Props {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category) => void;
  myColorMode: string;
}

const Categories = ({
  onSelectCategory,
  selectedCategory,
  myColorMode,
}: Props) => {
  const categories: Category[] = [
    {
      name: "Network devices",
      url: wirelessRouter1,
      subcategories: [
        {
          name: "Routers",
          url: router,
          devices: [
            { name: "829", url: router },
            { name: "1240", url: router },
            { name: "1841", url: router },
            { name: "1941", url: router },
            { name: "2620XM", url: router },
            { name: "2811", url: router },
            { name: "2911", url: router },
            { name: "2621XM", url: router },
            { name: "2901", url: router },
            { name: "81910X", url: router },
            { name: "PTRouter", url: router },
            { name: "PTEmpty", url: router },
            { name: "2811", url: router },
            { name: "4321", url: router },
          ],
        },
        {
          name: "Switches",
          url: switchImg,
          devices: [
            { name: "2960", url: switchImg },
            { name: "PT-Switch", url: switchImg },
            { name: "PT-Empty", url: switchImg },
            { name: "3560-24PS", url: MultilayerSwitch },
            { name: "3650-24PS", url: MultilayerSwitch },
            { name: "IE2000", url: IE2000 },
            { name: "PT-Bridge", url: bridge },
            { name: "2950-24", url: switchImg },
            { name: "5920T-24", url: switchImg },
          ],
        },
        {
          name: "Hubs",
          url: hub,
          devices: [
            { name: "Hub-PT", url: hub },
            { name: "Repeater-PT", url: repeater },
            { name: "CoAxialSplitter-PT", url: coaxialSplitter },
          ],
        },
        {
          name: "Wireless Devices",
          url: wirelessTransport,
          devices: [
            { name: "Meraki-MX65W", url: MerakiMX65W },
            { name: "LAP-PT", url: accesspoint },
            { name: "3702i", url: accesspoint },
            { name: "WLC", url: accesspoint },
            { name: "3504", url: accesspoint },
            { name: "2504", url: accesspoint },
            { name: "Home Router", url: wirelessRouter },
            { name: "AP-PT", url: accesspoint },
            { name: "AP-PT-A", url: accesspoint },
            { name: "AP-PT-AC", url: accesspoint },
            { name: "AP-PT-N", url: accesspoint },
            { name: "WRT300N", url: wirelessRouter },
            { name: "Home Gateway", url: homeGateway },
            { name: "Cell Tower", url: radioTower },
            { name: "CO server", url: fileserver },
          ],
        },
        {
          name: "Firewalls",
          url: firewall1,
          devices: [
            { name: "5506-X", url: firewall1 },
            { name: "5505", url: firewall },
          ],
        },
        {
          name: "WAN Emulation",
          url: WANEmulation,
          devices: [
            { name: "Cloud-PT", url: WANEmulation },
            { name: "PT-Empty", url: WANEmulation },
            { name: "DSL Modem", url: modem },
            { name: "Cable Modem", url: modem },
          ],
        },
      ],
    },
    {
      name: "End",
      url: fileServer,
      subcategories: [
        {
          name: "End1",
          url: firewall,
          devices: [
            { name: "laptop", url: laptop },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
            { name: "", url: firewall },
          ],
        },
        {
          name: "End2",
          url: firewall,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "End3",
          url: firewall,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Comopnents",
      url: airCooler,
      subcategories: [
        {
          name: "components1",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components2",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components3",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "components4",
          url: router,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Connections",
      url: connections,
      subcategories: [
        {
          name: "Connections1",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Connections2",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Connections3",
          url: workgroupSwitch,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "MultiUser",
      url: pcRoutercard,
      subcategories: [
        {
          name: "MultiUser1",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "MultiUser2",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "MultiUser3",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
    {
      name: "Miscella",
      url: folder,
      subcategories: [
        {
          name: "Miscella1",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Miscella2",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
        {
          name: "Miscella3",
          url: wirelessTransport,
          devices: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
          ],
        },
      ],
    },
  ];

  return (
    <HStack height={"35px"} borderRadius={14} bg={myColorMode} padding={2}>
      {categories.map((category) => (
        <Box
          key={category.name}
          onClick={() => onSelectCategory(category)}
          marginRight={2.5}
          // bg={selectedCategory === category ? "green" : "transparent"}
        >
          <Tooltip label={category.name} aria-label="A tooltip">
            <Image marginLeft={"1px"} boxSize={"30px"} src={category.url} />
          </Tooltip>
        </Box>
      ))}
    </HStack>
  );
};

export default Categories;
