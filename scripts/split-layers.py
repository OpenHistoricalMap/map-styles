import json
import os

style_files = [
    'woodblock/woodblock.json',
    'rail/rail.json',
    'japanese_scroll/ohm-japanese-scroll-map.json',
    'main/main.json'
]

def split_layers_by_id(file_path):
    folder, filename = os.path.split(file_path)
    output_directory = os.path.join(folder, 'layers')
    os.makedirs(output_directory, exist_ok=True)
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found! Skipping...")
        return

    # Load the JSON data
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return

    id_groups = {}
    id_order = []

    for layer in data.get("layers", []):
        layer_id = layer.get("id")
        if layer_id:
            if layer_id not in id_groups:
                id_groups[layer_id] = []
                id_order.append(layer_id)
            id_groups[layer_id].append(layer)

    def format_json(obj):
        return json.dumps(obj, indent=2, separators=(',', ': '), ensure_ascii=False)

    for index, layer_id in enumerate(id_order, start=1):
        layers = id_groups[layer_id]
        safe_layer_id = ''.join(c if c.isalnum() or c in ('-', '_') else '_' for c in layer_id)  # Ensure filename safe
        output_file = os.path.join(output_directory, f"{index}_{safe_layer_id}.json")

        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(format_json(layers))
            print(f"Saved {output_file}")
        except Exception as e:
            print(f"Error saving {output_file}: {e}")

    print(f"All layers for {file_path} have been successfully split and saved by 'id'.")

for style_file in style_files:
    split_layers_by_id(style_file)

print("Processing of all style files completed successfully!")